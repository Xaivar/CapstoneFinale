<?php

namespace Database\Seeders;

use App\Models\TabellaIscrittiEsame;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TabellaIscrittiEsameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TabellaIscrittiEsame::factory(10)->create();
    }
}
