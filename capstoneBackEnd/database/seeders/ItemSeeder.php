<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Item;


class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */

     public function run()
     {
         // Generate 10 fake items using the ItemFactory
         Item::factory()->count(10)->create();
     } 


}
