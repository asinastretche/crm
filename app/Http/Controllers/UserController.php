<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return Response
     */
    public function profile(Request $request)
    {
        $user = $request->user();

        return Inertia::render('User/Profile', [
            'user' => new UserResource($user),
        ]);
    }
}
