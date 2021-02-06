package com.example.nestor

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val loginBtn = findViewById<Button>(R.id.loginBtn)
        loginBtn.setOnClickListener { login() }

        val registerBtn = findViewById<TextView>(R.id.registerBtn)
        registerBtn.setOnClickListener { login() }
    }

    private fun login(){
        val username = findViewById<EditText>(R.id.username).toString()
        val intent = Intent(this, DisplayMessageActivity::class.java).apply {
            putExtra("USERNAME", username)
        }
        startActivity(intent)
    }
}