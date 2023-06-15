<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {

        //
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:40',
                'price' => 'required|numeric',
                'expDate' => 'required|date',
                'photo' => 'required|image|mimes:png,jpg,jpge,gif,svg,jpeg|max:8000',
            ];
        }else{
            return [
                'name' => 'required|string|max:40',
                'price' => 'required|numeric',
                'expDate' => 'required|date',
                'photo' => 'nullable|image|mimes:png,jpg,jpge,gif,svg,jpeg|max:8000',
            ];
        };
    }
}
