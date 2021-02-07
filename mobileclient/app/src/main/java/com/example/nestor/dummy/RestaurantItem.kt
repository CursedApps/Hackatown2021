package com.example.nestor.dummy

import android.util.Log
import com.example.nestor.R
import java.util.ArrayList
import java.util.HashMap

/**
 * Helper class for providing sample content for user interfaces created by
 * Android template wizards.
 *
 * TODO: Replace all uses of this class before publishing your app.
 */
object RestaurantItem {

    /**
     * An array of sample (dummy) items.
     */
    val ITEMS: MutableList<DummyItem> = ArrayList()
    private val images = listOf(R.drawable.p0, R.drawable.p1, R.drawable.p2, R.drawable.p3,
                                 R.drawable.p4, R.drawable.p5, R.drawable.p6, R.drawable.p7,
                                 R.drawable.p8, R.drawable.a9)

    /**
     * A map of sample (dummy) items, by ID.
     */
    private val ITEM_MAP: MutableMap<String, DummyItem> = HashMap()

    private const val COUNT = 10

    init {
        // Add some sample items.
        for (i in 1..COUNT) {
            addItem(createDummyItem(i))
        }
    }

    private fun addItem(item: DummyItem) {
        ITEMS.add(item)
        ITEM_MAP[item.id] = item
    }

    private fun createDummyItem(position: Int): DummyItem {
        val tags = listOf("tag1", "tag2", "tag3", "tag4")
        return DummyItem(position.toString(), "Restaurant $position", tags, images[position - 1])
    }

    /**
     * A dummy item representing a piece of content.
     */
    data class DummyItem(val id: String, val name: String, val tags: List<String>, val image: Int) {
        override fun toString(): String = name
    }
}