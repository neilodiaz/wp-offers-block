/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { PanelRow, PanelBody, TextControl, Button  } from '@wordpress/components';

import { useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'offers-block',
    });

    const { apiEndpoint, apiResponse } = attributes;
    let isValidUrl = true

    const onChangeEndpoint = (newEndpoint) => {
        // if ( !is_valid_url ) {
        // 	/* Dispatch error notice */
        //     createErrorNotice('Sub title is required', {
        //         id: 'subtitle-required',
        //         isDismissible: false,
        //     });

        //     /* Prevent post content from saving and autosaving */
        //     wp.data.dispatch('core/editor').lockPostSaving('subtitle-required');
        //     wp.data.dispatch('core/editor').lockPostAutosaving('subtitle-required');
        // } else {
        //     /* Remove notice */
        //     removeNotice('subtitle-required');

        //     /* Unlock post */
        //     wp.data.dispatch('core/editor').unlockPostSaving('subtitle-required');
        //     wp.data.dispatch('core/editor').unlockPostAutosaving('subtitle-required');
        // }

        // Regular expression for URL validation
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        if (urlRegex.test(newEndpoint)) {
            setAttributes({ apiEndpoint: newEndpoint });
            isValidUrl = true
            console.log('VALID URL')
        } else {
            isValidUrl = false
            console.log('Invalid URL')
        }
    };

    // Fetch data from API and save to our Attributes
    const fetchApiData = async () => {
        try {
            const response = await fetch(attributes.apiEndpoint);
            const data = await response.json();
            setAttributes({ apiResponse: data });
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    };

    // Should Only Fetch API if Endpoint is not Empty
    if (attributes.apiEndpoint)
        fetchApiData()

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Settings', 'basic-block')}
                    initialOpen={true}
                >
                    <PanelRow>
                        <fieldset>
                            <TextControl
                                label={__('API Endpoint', 'basic-block')}
                                value={apiEndpoint}
                                onChange={onChangeEndpoint}
                                help={__(
                                    'Input a valid API Endpoint',
                                    'basic-block'
                                )}
                                className="is-required"
                                required
                            />
                        </fieldset>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <p {...blockProps}>Offers Block - This will display all offers from an external API</p>
        </>
    );
}