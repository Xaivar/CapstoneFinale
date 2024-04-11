<?php

namespace Database\Seeders;

use App\Models\IscrizioneCorso;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IscrizioneCorsoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IscrizioneCorso::factory(10)->create();
    }
}
