CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF new.raw_app_meta_data IS NOT NULL THEN
    IF new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data ->> 'provider' = 'email' THEN
      INSERT INTO public.profiles (profile_id, name, username, role)
      VALUES (new.id, 'Anonymous', 'mr.' || SUBSTR(md5(random()::text), 1, 8), 'developer');
    END IF;
  END IF;
  RETURN new;
END;
$$;

CREATE TRIGGER user_to_profile_trigger
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
