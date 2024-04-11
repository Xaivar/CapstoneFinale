<?php

namespace Database\Seeders;

use App\Models\TabellaVoti;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TabellaVotiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TabellaVoti::factory(10)->create();
    }
}
