import React from 'react';
import {Checkbox, FormControlLabel, FormControl, Box} from '@mui/material';

export function CheckboxComponent({name, label, value, onChange}) {
    return (
        <FormControl component="fieldset" fullWidth>
            <Box display="flex" gap={2} flexWrap="wrap">
                <FormControlLabel
                    control={
                        <Checkbox
                            name={name}
                            checked={value || false}
                            onChange={e => onChange(e.target.checked)}
                        />
                    }
                    label={label}
                />
            </Box>
        </FormControl>
    );
}
