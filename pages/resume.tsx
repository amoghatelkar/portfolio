import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PortFolioNavbar } from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import { Document, Page } from 'react-pdf';
import { useState } from 'react'

const Resume: NextPage = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <Document
                file="resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
        </>
    )
}

export default Resume
