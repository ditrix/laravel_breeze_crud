<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return false;
    }

    public function rules(): array
    {
        return [
            'name' => ['required','string'],
            'email' => ['required','email'],
            'address' => ['nullable','string'],
            'website' => ['nullable','string'],
        ];
    }
}
