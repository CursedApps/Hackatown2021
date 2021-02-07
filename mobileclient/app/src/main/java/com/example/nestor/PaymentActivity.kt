package com.example.nestor

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class PaymentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment)

        val btn = findViewById<Button>(R.id.finish)
        btn.setOnClickListener{beginning()}

        val res = findViewById<TextView>(R.id.reservationBtn)
        res.setOnClickListener{select()}
    }

    private fun select(){
        val res = findViewById<TextView>(R.id.reservationBtn)
        res.setBackgroundColor(resources.getColor(R.color.turquoise))
    }
    private fun beginning(){
        val intent = Intent(this, RestaurantListActivity::class.java).apply {
            putExtra("USERNAME", "lol")
        }
        startActivity(intent)
    }
}