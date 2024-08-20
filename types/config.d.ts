export interface Config {
        /**
         * URL of Schoology server to connect to (app.schoology.com most of the time)
         * @default "https://app.schoology.com"
         */
        schoologyURL: string;
        tokenPrefix: string;
        token: string;
        /**
         * Whether to use custom authentication code if the method used by your district is abnormal.
         * Put the custom code in auth.ts in the root
         * COMING SOON
         */
        // customAuth: boolean;

        /**
         * Auth config pointer (COMING SOON)
         */
        // auth: AuthConfig;

}

// COMING SOON

// export interface AuthConfig {
//     /**
//      * Select authentication method here.
//      */
    
//     /**
//      * Set this to true to use the traditional username and password authentication found on app.schoology.com.
//      * THIS IS NOT FULLY SUPPORTED
//      */
//     traditionalAuth?: boolean;

//     /**
//      * Set this to true to use Azure SAML authentication
//      */
//     azureAuth?: boolean;
// }