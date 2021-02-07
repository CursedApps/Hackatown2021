package com.example.nestor

import android.content.Intent
import android.os.Bundle
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        try {
            this.supportActionBar!!.hide()
        } catch (e: NullPointerException) {
        }

        val loginBtn = findViewById<TextView>(R.id.loginBtn)
        loginBtn.setOnClickListener { login() }

        val registerBtn = findViewById<TextView>(R.id.registerBtn)
        registerBtn.setOnClickListener { login() }
    }

    private fun login(){
        val username = findViewById<EditText>(R.id.username).toString()
        val intent = Intent(this, RestaurantListActivity::class.java).apply {
            putExtra("USERNAME", username)
        }
        startActivity(intent)
    }
}