<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => $this->passwordRules(),
        ])->validate();

        $defaultRoleId = 2;

        if (! Role::query()->whereKey($defaultRoleId)->exists()) {
            throw ValidationException::withMessages([
                'email' => 'Default role (ID 2) is missing. Create it before registering users.',
            ]);
        }

        return User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'name' => trim($input['first_name'].' '.$input['last_name']),
            'email' => $input['email'],
            'role_id' => $defaultRoleId,
            'password' => $input['password'],
        ]);
    }
}
