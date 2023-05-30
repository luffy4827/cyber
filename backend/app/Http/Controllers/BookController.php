<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'data'=>Book::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $book = new Book();
        $book->name = $request->name;
        $book->details = $request->details;
        $book->author = $request->author;
        $book->publication = $request->publication;
        $book->branch = $request->branch;
        $book->quantity = $request->quantity;
        $filename = '';
        // if($request->file('photo')){
        //     $file= $request->file('photo');
        //     $filename= date('YmdHi').$file->getClientOriginalName();
        //     $file-> move(public_path('public/image'), $filename);
        // }
       
        $book->photo = $filename;

        $book->save();

        return response()->json([
            'message'=>'Book Is Sucessfully Added',
            'data'=>$book
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return response()->json(['book'=>$book]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        
        $book->price = $request->price;
        $book->quantity = $request->quantity;

        $book->save();

        return response()->json([
            'message'=>'Book Data is Updated',
            'data'=>$book
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json([
            'message'=>'Book Deleted',
            
        ]);


    }
}
