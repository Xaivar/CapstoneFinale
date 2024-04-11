<?php

namespace Database\Seeders;

use App\Models\TabellaEsami;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TabellaEsamiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TabellaEsami::factory(10)->create();
    }
}
