'use client'

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image, { StaticImageData } from 'next/image';
import '../app/css/tea.css';

Modal.setAppElement('#page')


export interface TeaItemProps {
    number: string;
    prefecture: string;
    description: string;
    extendedDescription?: string;
    outOfStock?: boolean;
    imageUrl: StaticImageData;
    style?: React.CSSProperties; // Add this line
}


export const TeaItem: React.FC<TeaItemProps> = ({ number, prefecture, description, extendedDescription, outOfStock, imageUrl }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        console.log('Opening modal...');
        setModalIsOpen(true);
    }

    const closeModal = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log('Closing modal...');
        setModalIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative' as 'relative',
            borderRadius: '20px',
            flexDirection: 'column' as 'column',
        },
    };

    return (
        <div className={`tea-item ${outOfStock ? 'out-of-stock' : ''}`} onClick={openModal} >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <div style={{ width: '47%', padding: '5px', borderRadius: '20px' }}>
                    <Image src={imageUrl} alt={description} width={250} height={150} />
                </div>
                <div className="tea-number">{number}</div>
                <h2 style={{ fontSize: '1em', color: '#000', alignItems: 'center' }}>{prefecture} Prefecture</h2>
                <p style={{ fontSize: '0.8em', textAlign: 'center', color: '#000' }}>{description}</p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Tea Details"
                style={customStyles}
            >
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px' }}>X</button>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <h2 style={{ color: '#000' }}>{prefecture} Prefecture</h2>
                    <div style={{ width: '47%', padding: '5px', borderRadius: '20px' }}>
                        <Image src={imageUrl} alt={description} width={500} height={350} />
                    </div>
                    <p style={{ color: '#000', fontSize: '1em' }}>{description}</p>
                    <div style={{ width: '100%', borderTop: '1px solid #000', margin: '10px 0' }}></div>
                    {extendedDescription && <p style={{ color: '#000', fontSize: '.8em' }}>{extendedDescription}</p>}
                </div>
            </Modal>
        </div>
    );
};