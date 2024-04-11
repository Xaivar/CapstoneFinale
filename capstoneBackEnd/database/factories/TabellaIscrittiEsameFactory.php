<?php

namespace Database\Factories;

use App\Models\TabellaEsami;
use App\Models\TabellaIscrittiEsame;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TabellaIscrittiEsame>
 */
class TabellaIscrittiEsameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'=> User::factory()->create()->id,
            'esame_id' => TabellaEsami::factory()->create()->id
        ];
    }
}
