import React from 'react';

interface SubComponentProps {
    header?: string;
    summary?: string;
    startTime?: string;
    endTime?: string;
    title?: string;
    description: string;
}
const SubComponent = React.memo((props: SubComponentProps) => {
    const { header, title, summary, description, startTime, endTime } = props;
    return (
        <div className="w-100 p-2">
            <h2 className="mt-2 mb-2"><b>{header}</b></h2>
            {title && startTime && endTime && (
                <div className="row">
                    <div className="col-8 h5">
                        <b>{title}</b>
                    </div>
                    {startTime && endTime && (
                        <div className="col-4 w-100 font-start-end-time justify-content-end">
                            <b><i>{startTime} - {endTime}</i></b>
                        </div>
                    )}
                </div>
            )}
            <div className="mt-1 mb-1">{summary}</div>
            <div className="mt-2 mb-2 description">
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
});

export default SubComponent;