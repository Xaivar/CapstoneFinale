<?php

namespace Database\Seeders;

use App\Models\IscrizioneIndirizzi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IscrizioneIndirizziSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IscrizioneIndirizzi::factory(10)->create();
    }
}
