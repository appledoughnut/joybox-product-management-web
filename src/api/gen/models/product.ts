/* tslint:disable */
/* eslint-disable */
/**
 * Product API
 * Apis to get and manage products
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * id of product
     * @type {number}
     * @memberof Product
     */
    'id': number;
    /**
     * title of product
     * @type {string}
     * @memberof Product
     */
    'title': string;
    /**
     * price of product
     * @type {number}
     * @memberof Product
     */
    'price': number;
    /**
     * description for product
     * @type {string}
     * @memberof Product
     */
    'description': string;
}
