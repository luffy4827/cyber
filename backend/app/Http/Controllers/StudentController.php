<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'data'=>Student::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $student = new Student();
        $student->name = $request->name;
        $student->email = $request->email;
        $student->password = $request->password;
        $student->type = $request->type;

        $student->save();

        return response()->json([
            'message'=>'student Created',
            'data'=>$student
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return response()->json(['student'=>$student]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        
        $student->name = $request->name;
        $student->type = $request->type;

        $student->save();

        return response()->json([
            'message'=>'student Updated',
            'data'=>$student
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return response()->json([
            'message'=>'student Deleted',
            
        ]);


    }
}
