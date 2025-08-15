CREATE OR REPLACE VIEW community_post_detail AS
SELECT
  posts.post_id,
  posts.title,
  posts.content,
  posts.upvotes,
  posts.created_at,
  topics.topic_id,
  topics.name AS topic_name,
  topics.slug AS topic_slug,
  COUNT(public.post_replies.post_reply_id) AS replies,
  profiles.name AS author_name,
  profiles.avatar AS author_avatar,
  profiles.role AS author_role,
  profiles.created_at AS author_created_at,
  (SELECT COUNT(*) FROM public.products WHERE public.products.profile_id = profiles.profile_id) AS products
FROM
  public.posts
INNER JOIN public.topics USING (topic_id)
LEFT JOIN public.post_replies USING (post_id)
INNER JOIN public.profiles ON (profiles.profile_id = posts.profile_id)
GROUP BY posts.post_id, topics.topic_id, topics.name, topics.slug, profiles.name, profiles.avatar, profiles.role, profiles.created_at, profiles.profile_id;
