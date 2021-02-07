package com.example.nestor

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import com.example.nestor.dummy.MenuItem

/**
 * A fragment representing a list of Items.
 */
class MenuEntryFragment : Fragment() {

    private var columnCount = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        arguments?.let {
            columnCount = 1
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.menu_item_list, container, false)

        // Set the adapter
        if (view is LinearLayout) {
            with(view) {
                val recyclerView = view.findViewById<RecyclerView>(R.id.menuList)
                recyclerView.layoutManager = when {
                    columnCount <= 1 -> LinearLayoutManager(context)
                    else -> GridLayoutManager(context, columnCount)
                }
                recyclerView.adapter = MyMenuEntryRecyclerViewAdapter(MenuItem.ITEMS)
            }
        }

        view.findViewById<Button>(R.id.toPaymentBtn).setOnClickListener{goToPaymentActivity(view)}
        return view
    }

    private fun goToPaymentActivity(view: View){
        val intent = Intent(view.context, PaymentActivity::class.java).apply {
        }
        startActivity(intent)
    }

    companion object {

        // TODO: Customize parameter argument names
        const val ARG_COLUMN_COUNT_MENU = "column-count"

        // TODO: Customize parameter initialization
        @JvmStatic
        fun newInstance(columnCount: Int) =
            MenuEntryFragment().apply {
                arguments = Bundle().apply {
                    putInt(ARG_COLUMN_COUNT_MENU, columnCount)
                }
            }
    }
}