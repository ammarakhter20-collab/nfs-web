from django.db import models

class News(models.Model):
    CATEGORIES = (
        ('ALL', 'All'),
        ('UNBOUND', 'NFS Unbound'),
        ('HEAT', 'NFS Heat'),
        ('HOT_PURSUIT', 'NFS Hot Pursuit'),
    )
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField()
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_file = models.ImageField(upload_to='news/', blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORIES, default='ALL')
    published_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "News"

    def __str__(self):
        return self.title

class Game(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(max_length=500, blank=True, null=True)
    image_file = models.ImageField(upload_to='games/', blank=True, null=True)
    video_url = models.URLField(max_length=500, blank=True, null=True, help_text="Direct MP4 link (e.g. from CDN). Use this OR upload a file below.")
    video_file = models.FileField(upload_to='games/videos/', blank=True, null=True, help_text="Upload a local MP4 video file for the hover trailer.")
    release_date = models.DateField()
    store_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.title



class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    birthday = models.DateField(null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    consent = models.BooleanField(default=False)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
