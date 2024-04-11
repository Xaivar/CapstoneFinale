<?php

namespace Database\Seeders;

use App\Models\CorsiUniversitario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CorsiUniversitarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CorsiUniversitario::factory(5)->create();
    }
}
