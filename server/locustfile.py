from locust import HttpUser, task, between

class MyUser(HttpUser):
  wait_time = between(1, 3)

  @task
  def hit_root_endpoint(self):
    self.client.get("/")
