package com.example.nestor

import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView

import com.example.nestor.dummy.MenuItem.MenuItem

/**
 * [RecyclerView.Adapter] that can display a [MenuItem].
 * TODO: Replace the implementation with code for your data type.
 */
class MyMenuEntryRecyclerViewAdapter(
    private val values: List<MenuItem>
) : RecyclerView.Adapter<MyMenuEntryRecyclerViewAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.menu_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = values[position]
        holder.recipeName.text = item.name
        holder.recipePrice.text = item.price
        holder.quantity.text = 0.toString()
        holder.itemView.findViewById<TextView>(R.id.addBtn).setOnClickListener{ increment(holder) }
    }

    private fun increment(holder: ViewHolder){
        var qt = holder.quantity.text.toString().toInt()
        qt += 1
        holder.quantity.text = qt.toString()
    }

    override fun getItemCount(): Int = values.size

    inner class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val recipeName: TextView = view.findViewById(R.id.recipeName)
        val recipePrice: TextView = view.findViewById(R.id.recipePrice)
        val quantity: TextView = view.findViewById(R.id.quantity)

        override fun toString(): String {
            return super.toString() + " '" + recipeName.text + "'"
        }
    }
}