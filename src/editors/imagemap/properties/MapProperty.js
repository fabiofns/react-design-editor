import React from 'react';
import { Form, Input, Radio, Row, Col, InputNumber } from 'antd';
import i18n from 'i18next';

export default {
	render(canvasRef, form, data) {
		const { getFieldDecorator } = form;
		if (!data) {
			return null;
		}
		const layout = data.layout || 'fixed';
		return (
			<React.Fragment>
				<Form.Item label={i18n.t('common.name')} colon={false}>
					{getFieldDecorator('name', {
						rules: [
							{
								required: false,
								message: i18n.t('validation.enter-arg', { arg: i18n.t('common.name') }),
							},
						],
						initialValue: data.name || '',
					})(<Input />)}
				</Form.Item>
				
			</React.Fragment>
		);
	},
};
