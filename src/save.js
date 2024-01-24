/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save( {
		className: 'offers-block',
	} );
	const className = blockProps.className;
	const { apiEndpoint, apiResponse } = attributes;

	return (
		<>
			<p {...blockProps}>Offers Block - This will display all offers from an external API</p>
			{apiResponse && apiResponse.record && (
				
				<div class="offers-wrapper">{
					Object.keys(apiResponse.record.offers).map((offer,i)=>{
						return (<>
								<div class="offer-item" key={i}>
									<div class="offer-item-body">
										{apiResponse.record.offers[offer].ribbon && (
											<div class="ribbon-container">
												<span>{apiResponse.record.offers[offer].ribbon}</span>
											</div>
										)}
										<div class="content">
											<div class="logo-container">
												<img class="logo" src={apiResponse.record.offers[offer].logo.dark} alt={apiResponse.record.offers[offer].brand} width="300" />
											</div>
											<div class="headlines-container">
												<div class="headline-one">{apiResponse.record.offers[offer].headlines.one.title}</div>
												<div class="headline-two">{apiResponse.record.offers[offer].headlines.two.title}</div>
												<div class="headline-three">{apiResponse.record.offers[offer].headlines.three.title}</div>
											</div>
											<div class="deposits-container">
												<ul class="rating" data-rating="3.5">
													<li class="rating__item"></li>
													<li class="rating__item"></li>
													<li class="rating__item"></li>
													<li class="rating__item"></li>
													<li class="rating__item"></li>
												</ul>
												<div class="deposits" id="depositSlider">
													{
														Object.entries(apiResponse.record.offers[offer].deposits).map(([key, deposit]) => {
															return (
																<div class="deposit-logo"><img src={deposit.dark_url} alt="" /></div>
															);
														})
													}
												</div>
											</div>
											<div class="bullets-container">
												<ul class="bullets">
													{
														Object.entries(apiResponse.record.offers[offer].bullet_points).map(([key, point]) => {
															return (
																<li class="bullet-item">{point.title}</li>
															);
														})
													}
												</ul>
											</div>
											<div class="cta-button-container">
												<a href="" class="cta-button">{apiResponse.record.offers[offer].cta.one}</a>
												<span class="text-underline">{apiResponse.record.offers[offer].cta.two}</span> | <span class="text-underline"><a href={apiResponse.record.offers[offer].cta.links.review}>Review</a></span>
											</div>
										</div>
										<div class="preview-container">
											<span><img src="images/preview-photo.png" alt="" /></span>
											<span>Preview</span>
										</div>
									</div>
									<div class="offer-item-footer">
										<span class="fine-print">{apiResponse.record.offers[offer].fine_print}</span> | <span class="disclaimer">{apiResponse.record.offers[offer].disclaimer}</span>
									</div>
								</div>
							</>
						)
					})
					}
				</div>
			)}
		</>
	);
}
