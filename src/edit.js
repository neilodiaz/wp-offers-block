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

    const { apiEndpoint } = attributes;
    const { createErrorNotice, removeNotice } = useDispatch(noticesStore);

    const onChangeEndpoint = (newEndpoint) => {
        let is_valid_url = isValidUrl(newEndpoint)
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
        setAttributes({ apiEndpoint: newEndpoint });

        // fetch('https://api.jsonbin.io/v3/b/65aa4442dc74654018964dd9/', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //     },
        // })
        // .then(response => response.json())
        // .then(api_response => setAttributes({ apiResponse: api_response }))
    };

    const fetchApiData = async () => {
        try {
            const response = await fetch(attributes.apiEndpoint);
            const data = await response.json();
            console.log(data)
            setAttributes({ apiResponse: data });
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    };

    const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }

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
                            <Button onClick={fetchApiData}>Fetch API Data</Button>
                        </fieldset>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <p {...blockProps}>Offers Block - This will display all offers from an external API</p>
        </>
    );
}