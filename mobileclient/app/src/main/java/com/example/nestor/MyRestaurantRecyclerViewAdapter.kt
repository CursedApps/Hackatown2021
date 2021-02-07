package com.example.nestor

import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.nestor.dummy.RestaurantItem.DummyItem


/**
 * [RecyclerView.Adapter] that can display a [DummyItem].
 * TODO: Replace the implementation with code for your data type.
 */
class MyRestaurantRecyclerViewAdapter(
    private val values: List<DummyItem>
) : RecyclerView.Adapter<MyRestaurantRecyclerViewAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.fragment_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = values[position]
        holder.nameView.text = item.name
        holder.tag1.text = item.tags[0]
        holder.tag2.text = item.tags[1]
        holder.tag3.text = item.tags[2]
        holder.tag4.text = item.tags[3]
        holder.image.setImageResource(item.image)
        holder.itemView.setOnClickListener{ openRestaurantInspector(holder.itemView, item) }
    }

    private fun openRestaurantInspector(view: View, item: DummyItem) {
        val intent = Intent(view.context, RestaurantDetailActivity::class.java).apply {
                putExtra("NAME", item.name)
                putExtra("IMAGE_RESOURCE", item.image)
        }
        view.context.startActivity(intent)
    }

    override fun getItemCount(): Int = values.size

    inner class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val nameView: TextView = view.findViewById(R.id.restaurantName)
        val tag1: TextView = view.findViewById(R.id.tag1)
        val tag2: TextView = view.findViewById(R.id.tag2)
        val tag3: TextView = view.findViewById(R.id.tag3)
        val tag4: TextView = view.findViewById(R.id.tag4)
        val image: ImageView = view.findViewById(R.id.restaurantImage)

        override fun toString(): String {
            return super.toString() + " '" + nameView.text + "'"
        }
    }
}