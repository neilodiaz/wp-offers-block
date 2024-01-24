<?php

/**
 * Plugin Name:       Offers Block
 * Description:       Offers Block plugin Test
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Neiljun I. Odiaz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       offers-block
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


class Offers_Block_Plugin
{
	// Intitialize our custom offers block plugin
	public function __construct() {        
		// Register block script and style.
        add_action('wp_enqueue_scripts', array($this, 'enqueue_block_assets'));

        // Register the block.
        add_action('init', array($this, 'register_block'));
    }

	 /**
     * Enqueue block assets.
     */
    public function enqueue_block_assets() {
        // Enqueue the block script.
		wp_enqueue_style( 'load-font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' );
		wp_enqueue_style( 'load-slick-css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );

		wp_enqueue_script('jquery.1.9.1');
		wp_enqueue_script( 'load-slick-js', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.0.0', true );
		wp_enqueue_script( 'custom-js', plugins_url( '/src/scripts', __FILE__ ) . '/custom-script.js', array('jquery'), '1.0.0', true );
    }

	/**
     * Register the block.
     */
    public function register_block() {
		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		 */

		//  https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

        register_block_type(__DIR__ . '/build');
    }
}

new Offers_Block_Plugin();