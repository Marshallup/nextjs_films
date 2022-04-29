import React, { FC } from "react";
import Head from 'next/head';
import BaseFooter from "components/BaseFooter";
import BaseHeader from "components/BaseHeader";

const BaseLayout: FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <BaseHeader />

            <main>
                { children }
            </main>

            <BaseFooter />
        </>
    )
}

export default BaseLayout;