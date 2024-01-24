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
        // Register the block.
        add_action('init', array($this, 'register_block'));
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

        register_block_type(__DIR__ . '/build');
    }
}

new Offers_Block_Plugin();