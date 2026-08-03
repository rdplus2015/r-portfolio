from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models


# Create your models here.

# Custom User Manager class that inherits from BaseUserManager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Create and return a regular user with an email and password."""
        # Ensure that the email is provided
        if not email:
            raise ValueError("The Email field must be set")
        # Normalize the email to ensure it's in a standard format (lowercase)
        email = self.normalize_email(email)
        # Create a new user instance with the provided email and additional fields
        user = self.model(email=email, **extra_fields)
        # Hash the password using the set_password method
        user.set_password(password)
        # Save the user object in the database
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser with an email and password."""
        # Set default values for staff and superuser status
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # Use the create_user method to create the superuser
        return self.create_user(email, password, **extra_fields)

# Custom User model class that inherits from AbstractBaseUser and PermissionsMixin
class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Define fields for the custom user model
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)  # Flag indicating whether the account is active (default: True)
    is_staff = models.BooleanField(default=False)  # Flag indicating if the user is a staff member (default: False)
    is_superuser = models.BooleanField(default=False)  # Flag indicating if the user is a superuser (default: False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Attach the CustomUserManager to the CustomUser model for managing users
    objects = CustomUserManager()

    # The USERNAME_FIELD tells Django to use the email as the unique identifier for login
    USERNAME_FIELD = 'email'

    # REQUIRED_FIELDS specifies the additional fields required when creating a user (besides the USERNAME_FIELD)
    REQUIRED_FIELDS = ['first_name', 'last_name']

    # String representation of the user object, returning the email
    def __str__(self):
        return self.email