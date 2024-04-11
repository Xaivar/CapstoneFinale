<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titolo' => $this->faker->sentence(),
            'descrizione' => $this->faker->paragraph(),
            'immagine' => 'https://picsum.photos/id/'.fake()->numberBetween(1, 60).'/200/300'
        ];
    }
}
