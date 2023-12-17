from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()


class UserAdmin(BaseUserAdmin):
	list_display = ('email', 'first_name', 'last_name')
	readonly_fields = ('last_login',)

	fieldsets = (
		('Main', {'fields': ('email', 'first_name', 'last_name', 'password')}),
		('Permissions', {'fields': ('is_active', 'is_superuser', 'last_login', 'groups', 'user_permissions')}),
	)

	add_fieldsets = (
		(None, {'fields': ('email', 'first_name', 'last_name', 'password1', 'password2')}),
	)

	search_fields = ('email', 'first_name', 'last_name')
	ordering = ('first_name',)
	filter_horizontal = ('groups', 'user_permissions')

	def get_form(self, request, obj=None, **kwargs):
		form = super().get_form(request, obj, **kwargs)
		is_superuser = request.user.is_superuser
		if not is_superuser:
			form.base_fields['is_superuser'].disabled = True
		return form


admin.site.register(User, UserAdmin)

