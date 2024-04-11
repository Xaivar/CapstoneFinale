<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(10)->create();

        // Creazione dell'utente admin
        User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => 'admin',
            'city' => 'Napoli',
            'state' => 'NA',
            'cap' => '80048'
        ]);

        $this->call([
            PostSeeder::class,
            CorsiUniversitarioSeeder::class,
            IscrizioneCorsoSeeder::class,
            TabellaEsamiSeeder::class,
            TabellaIscrittiEsameSeeder::class,
            TabellaVotiSeeder::class,
            NewsSeeder::class,
            IndirizziStudioSeeder::class,
            IscrizioneIndirizziSeeder::class
        ]);



    }
}
