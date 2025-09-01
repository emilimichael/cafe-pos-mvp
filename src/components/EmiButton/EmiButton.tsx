import clsx from "clsx";

export type EmiButtonProps = {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'outline' | 'filled';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const EmiButton = ({ label, variant = 'primary', type = 'filled', onClick }: EmiButtonProps) => {
    const base = 'px-4 py-2 rounded-3xl';

    const classes = clsx(
        base,
        variant === 'primary'  && type === 'filled' && 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
        variant === 'primary'  && type === 'outline' && 'border-2 border-primary text-primary hover:border-primary-hover hover:text-primary-hover active:bg-primary-active active:text-white',
        variant === 'secondary' ? 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-white' : '',

    )
    return (
        <button className={classes} onClick={onClick}>
            {label}
        </button>
    );
}