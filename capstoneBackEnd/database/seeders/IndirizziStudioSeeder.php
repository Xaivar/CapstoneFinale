<?php

namespace Database\Seeders;

use App\Models\IndirizziStudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IndirizziStudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IndirizziStudio::factory(10)->create();
    }
}
