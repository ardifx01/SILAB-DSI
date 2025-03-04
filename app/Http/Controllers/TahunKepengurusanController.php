<?php

namespace App\Http\Controllers;

use App\Models\TahunKepengurusan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TahunKepengurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tahunKepengurusan = TahunKepengurusan::all();
        
        return Inertia::render('TahunKepengurusan', [
            'tahunKepengurusan' => $tahunKepengurusan
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'tahun' => 'required|string|max:255|unique:tahun_kepengurusan',
            'isactive' => 'required|boolean',
        ]);

        TahunKepengurusan::create($request->all());

        return redirect()->route('tahun-kepengurusan.index')
            ->with('message', 'Tahun Kepengurusan berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(TahunKepengurusan $tahunKepengurusan)
    {
        return Inertia::render('TahunKepengurusan/Show', [
            'tahunKepengurusan' => $tahunKepengurusan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TahunKepengurusan $tahunKepengurusan)
    {
        $tahunKepengurusan->delete();

        return redirect()->route('tahun-kepengurusan.index')
            ->with('message', 'Tahun Kepengurusan berhasil dihapus.');
    }
}