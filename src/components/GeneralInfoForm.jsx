import {
  Form,
  Input,
  Col,
  Row,
  DatePicker,
  Select,
  Card,
  Button,
  Radio,
} from "antd";
import "../css/GeneralInfoForm.css";
import { fetchDataReferenceCreate } from "../hooks/useFormCreate";

const GeneralInfoForm = ({ GeneralData }) => {
  const initialValues = {
    lastname: GeneralData?.name, // Valor inicial para el campo 'nombre'
    firstname: GeneralData?.name, // Valor inicial para el campo 'correo'
  };

  const UpdateInfo = async (data) => {
    const response = await fetchDataReferenceCreate(data);
    console.log(response);
  };

  const onFinish = (values) => {
    console.log(values);
    UpdateInfo(values);
  };
  return (
    <div>
      <div className="container">
        <Card
          className="CardGeneralForm"
          title={
            <span className="TitleCard">
              <span className="NumberTitleCard">1</span> Información general
            </span>
          }
          bordered={true}
        >
          <div className="centered-form">
            <Form
              initialValues={initialValues}
              className="GeneralInfoForm"
              name="GeneralForm"
              onFinish={onFinish}
              labelCol={{
                span: 16,
              }}
              wrapperCol={{
                span: 22,
              }}
              autoComplete="off"
              layout="vertical"
            >
              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Apellido"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Apellido requerido",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tus apellidos" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Nombre"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Nombre Requerido",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tus nombres" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Nacionalidad"
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: "Nacionalidad requerida",
                      },
                    ]}
                  >
                    <Input placeholder="Selecciona tu nacionalidad" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="CI / Pasaporte"
                    name="passport"
                    rules={[
                      {
                        required: true,
                        message: "CI / Pasaporte requerido",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tu CI/ Pasaporte" />
                    {/* {loading ? DataGeneralInfo?.order : ""} */}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Fecha de nacimiento"
                    name="birthdate"
                    rules={[
                      {
                        required: true,
                        message: "Fecha de nacimiento requerida",
                      },
                    ]}
                  >
                    <DatePicker className="DataPickerClass" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Genero"
                    name="gender"
                    className="formradiojob"
                    rules={[
                      {
                        required: true,
                        message: "Genero requerido",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio className="radioGeneral" value="Masculino">
                        Masculino
                      </Radio>
                      <Radio value="Femenino"> Femenino </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Estado civil"
                    name="civilstate"
                    rules={[
                      {
                        required: true,
                        message: "Estado civil requerido",
                      },
                    ]}
                  >
                    <Select placeholder="Ingresa tu Estado Civil">
                      <Select.Option value="Casado">Casado</Select.Option>
                      <Select.Option value="Soltero">Soltero</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Profesión"
                    name="profession"
                    rules={[
                      {
                        required: true,
                        message: "Profesion requerida",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tu Profesion" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    wrapperCol={{
                      span: 23,
                    }}
                    label="Dirección de domicilio"
                    name="homeAddress"
                    rules={[
                      {
                        required: true,
                        message: "Dirección de domicilio requerida",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tu domicilio" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Tiempo de residencia"
                    name="residenceTime"
                    rules={[
                      {
                        required: true,
                        message: "Tiempo de residencia requerido",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tu residencia" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {" "}
                  <Form.Item
                    label="Teléfono celular"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Teléfono celular requerido",
                      },
                    ]}
                  >
                    <Input placeholder="Ingresa tu numero de teléfono" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
                <Button
                  className="custom-button"
                  type="secundary"
                  htmlType="submit"
                >
                  Continuar
                </Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
