import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface ProcessSkillProps {
    title: string;
    now: number;
}

const ProcessSkill = React.memo((props: ProcessSkillProps) => {
    const { title, now } = props;
    return (
        <div className="w-100 mt-2 mb-2">
            <div className="title-process-bar">{title}</div>
            <ProgressBar now={now * 100 / 5} />
        </div>
    );
});

export default ProcessSkill;