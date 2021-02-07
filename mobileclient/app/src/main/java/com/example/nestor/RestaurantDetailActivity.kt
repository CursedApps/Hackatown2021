package com.example.nestor

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class RestaurantDetailActivity : AppCompatActivity() {
    var name: String? = null
    var imgRes: Int? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_restaurant_detail)
        this.name = intent.getStringExtra("NAME").toString()
        this.imgRes = intent.getIntExtra("IMAGE_RESOURCE", 0)

        setDescription(savedInstanceState)
        setMenu(savedInstanceState)

        try {
            this.supportActionBar!!.hide()
        } catch (e: NullPointerException) {
        }
    }

    private fun setDescription(savedInstanceState: Bundle?) {
        if (savedInstanceState == null) { // initial transaction should be wrapped like this
            supportFragmentManager.beginTransaction()
                .add(R.id.restaurantDescriptionContainer, RestaurantDescription.newInstance(this.name!!,
                    this.imgRes!!
                ))
                .commit()
        }
    }

    private fun setMenu(savedInstanceState: Bundle?) {
        if (savedInstanceState == null) { // initial transaction should be wrapped like this
            supportFragmentManager.beginTransaction()
                .add(R.id.menuContainer, MenuEntryFragment.newInstance(1))
                .commit()
        }
    }
}