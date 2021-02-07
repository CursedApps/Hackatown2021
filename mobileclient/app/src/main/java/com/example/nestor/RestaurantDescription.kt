package com.example.nestor

import android.media.Image
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val NAME = "NAME"
private const val IMAGE_RES = "IMAGE_RESOURCE"

/**
 * A simple [Fragment] subclass.
 * Use the [RestaurantDescription.newInstance] factory method to
 * create an instance of this fragment.
 */
class RestaurantDescription : Fragment() {
    // TODO: Rename and change types of parameters
    private var name: String? = null
    private var imageRes: Int? = null;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            name = it.getString(NAME)
            imageRes = it.getInt(IMAGE_RES)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_restaurant_description, container, false)
        val restName = view.findViewById<TextView>(R.id.restaurantNameDescription)
        restName.text = name

        val image = view.findViewById<ImageView>(R.id.restaurantImageDescription)
        imageRes?.let { image.setImageResource(it) }
        return view
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment RestaurantDescription.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(name: String, imageRes: Int) =
            RestaurantDescription().apply {
                arguments = Bundle().apply {
                    putString(NAME, name)
                    putInt(IMAGE_RES, imageRes)
                }
            }
    }
}