<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
use App\Models\Artist;
use App\Models\Category;
use App\Models\Role;
use App\Models\Script;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $adminRole = Role::create([
            'name' => 'admin',
        ]);

        Role::create([
            'name' => 'user',
        ]);

        $horrorCategory = Category::create([
            'name' => 'horror',
        ]);

        Category::create([
            'name' => 'action',
        ]);

        $movie = Movie::create([
            'title' => 'saw',
            'description' => 'a horror movie',
            'release_date' => '2026/12/3',
            'category_id' => $horrorCategory->id,
        ]);

        $artist = Artist::create([
            'name' => 'Hamzeh',
            'role' => 'Director',
        ]);

        $movie->artists()->attach($artist->id);

        Script::create([
            'title' => 'example.title',
            'content' => 'example.content',
            'artist_id' => $artist->id,
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role_id' => $adminRole->id,
        ]);
    }
}
