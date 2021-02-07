package com.example.nestor.dummy

import android.util.Log
import android.view.Menu
import com.example.nestor.R
import java.util.ArrayList
import java.util.HashMap

/**
 * Helper class for providing sample content for user interfaces created by
 * Android template wizards.
 *
 * TODO: Replace all uses of this class before publishing your app.
 */
object MenuItem {

    /**
     * An array of sample (dummy) items.
     */
    val ITEMS: MutableList<MenuItem> = ArrayList()
    private val names = listOf("Chicken Soup", "Tuna Sandwich", "Pierogis", "Onion Soup",
        "Pepperoni Pizza")
    private val prices = listOf("10.00", "12.99", "11.50", "5.00",
        "20.99")


    /**
     * A map of sample (dummy) items, by ID.
     */
    private val ITEM_MAP: MutableMap<String, MenuItem> = HashMap()

    private const val COUNT = 5

    init {
        // Add some sample items.
        for (i in 1..COUNT) {
            addItem(createDummyItem(i))
        }
    }

    private fun addItem(item: MenuItem) {
        ITEMS.add(item)
        ITEM_MAP[item.id] = item
    }

    private fun createDummyItem(position: Int): MenuItem {
        return MenuItem(position.toString(), names[position-1], prices[position-1])
    }

    /**
     * A dummy item representing a piece of content.
     */
    data class MenuItem(val id: String, val name: String, val price: String) {
        override fun toString(): String = name
    }
}