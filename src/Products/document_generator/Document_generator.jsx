import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

const Document_generator = () => (
  <div>
    <h1>Отчёт по патрулированию</h1>
    
    <Formik
      initialValues={{ Patrol_task_number: '', Date_issue_task: '', Patrol_date: '', 
        Patrol_route_number: '', What_date_was_approved: '08.12.2023', Year_patrol: 2024,
        Person_issued_task: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.',
        Full_name_senior_patroller: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', 
        Full_name_junior_patroller: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', 
        Time_assignment_issue: '', Date_assignment_issue: '', Additional_order: false, 
        Number_patrol_act: '', Date_patrol_act: '', Object_leaflet: '', Village_leaflet: '', 
        Number_informed_people: 2, Village_informed_people: '', Patrol_car: 'С948ХК',
        Is_there_photo_table: false 
      }}
      validate={values => {
        const errors = {};

        if (!values.Patrol_task_number) {
          errors.Patrol_task_number = 'Введите номер задания';
        } else if (!/^\d{1,4}$/i.test(values.Patrol_task_number)) {
          errors.Patrol_task_number = 'Номер задания должен быть не более 4 цифр';
        }

        if (!values.Date_issue_task) {
          errors.Date_issue_task = 'Введите дату выдачи задания';
        } 

        if (!values.Patrol_date) {
          errors.Patrol_date = 'Введите дату патрулирования';
        }

        if (!values.Patrol_route_number) {
          errors.Patrol_route_number = 'Выберите номер маршрута патрулирования';
        } 

        if (!values.What_date_was_approved) {
          errors.What_date_was_approved = 'Введите дату выдачи задания';
        } else if (!/^\d{2}.\d{2}.\d{4}$/i.test(values.What_date_was_approved)) {
          errors.Patrol_task_number = 'Дата должна быть подобной 08.12.2023';
        }

        if (!values.Year_patrol) {
          errors.Year_patrol = 'Выберите год патрулирования';
        } 

        if (!values.Person_issued_task) {
          errors.Person_issued_task = 'Выберите выдавшего задание';
        } 

        if (!values.Full_name_senior_patroller) {
          errors.Full_name_senior_patroller = 'Выберите старшего патрульной группы';
        } 

        if (!values.Full_name_junior_patroller) {
          errors.Full_name_junior_patroller = 'Выберите сопатрульного';
        }

        if (!values.Time_assignment_issue) {
          errors.Time_assignment_issue = 'Введите время выдачи задания';
        } 

        if (!values.Date_assignment_issue) {
          errors.Date_assignment_issue = 'Выберите дату выдачи задания';
        }

        if (!values.Number_patrol_act) {
          errors.Number_patrol_act = 'Введите номер акта патрулирования';
        } else if (!/^\d{1,4}$/i.test(values.Number_patrol_act)) {
          errors.Number_patrol_act = 'Номер акта должен быть не более 4 цифр';
        }

        if (!values.Date_patrol_act) {
          errors.Date_patrol_act = 'Выберите дату акта патрулирования';
        }

        return errors;
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched, isSubmitting, ...props }) => (
        <Form>

          {/* ------------------------------------- Задание --------------------------------- */}

          <div className='uk-margin'>
            <h2 className='uk-heading-divider'>Задание</h2>
          </div>

          <Input label_name='Номер задания' field_name='Patrol_task_number' placeholder='185' input_type='number' is_primary={true} />       
          <Input label_name='От какого числа' field_name='Date_issue_task' placeholder='' input_type='date' is_primary={false} />   
          <Input label_name='Дата патрулирования' field_name='Patrol_date' placeholder='' input_type='date' is_primary={false} />      
          
          <Select 
            label_name='Номер маршрута патрулирования' 
            field_name='Patrol_route_number' 
            options_list={[
              {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
              {id: '2', value: '70,1', name_option: '70', selected: false, disabled: false},
              {id: '3', value: '71,2', name_option: '71', selected: false, disabled: false},
              {id: '4', value: '72,3', name_option: '72', selected: false, disabled: false},
              {id: '5', value: '73,4', name_option: '73', selected: false, disabled: false},
              {id: '6', value: '74,5', name_option: '74', selected: false, disabled: false},
              {id: '7', value: '75,6', name_option: '75', selected: false, disabled: false},
              {id: '8', value: '76,7', name_option: '76', selected: false, disabled: false},
              {id: '9', value: '77,8', name_option: '77', selected: false, disabled: false},
              {id: '10', value: '78,9', name_option: '78', selected: false, disabled: false},
            ]} 
            is_primary={true}           
          />

          <Input label_name='Какого числа утверждён' field_name='What_date_was_approved' placeholder='08.12.2023' input_type='text' is_primary={false} />   
          
          <Select 
            label_name='Год патрулирования' 
            field_name='Year_patrol' 
            options_list={[
              {id: '1', value: '2024', name_option: '2024', selected: true, disabled: false},
              {id: '2', value: '2025', name_option: '2025', selected: false, disabled: false},
              {id: '3', value: '2026', name_option: '2026', selected: false, disabled: false},
              {id: '4', value: '2027', name_option: '2027', selected: false, disabled: false},
            ]} 
            is_primary={false} 
          />

          <Select 
            label_name='Кто выдал задание' 
            field_name='Person_issued_task' 
            options_list={[
              {id: '1', value: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.', name_option: 'Директор', selected: true, disabled: false},
              {id: '2', value: 'заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.', name_option: 'Заместитель', selected: false, disabled: false},
            ]} 
            is_primary={false} 
          />

          <Select 
            label_name='Старший патрульной группы' 
            field_name='Full_name_senior_patroller' 
            options_list={[
              {id: '1', value: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', name_option: 'Устинов, мастер Мясноборского', selected: true, disabled: false},
              {id: '2', value: 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна', name_option: 'Кузнецова, участковый Ермолинского', selected: false, disabled: false},
              {id: '3', value: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', name_option: 'Маркова, участковый Новгородского', selected: false, disabled: false},
              {id: '4', value: 'мастер леса Советского участкового лесничества Капитонова Марина Александровна', name_option: 'Капитонова, мастер Советского', selected: false, disabled: false},
              {id: '5', value: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', name_option: 'Зайцев, мастер Новгородского', selected: false, disabled: false},
            ]}   
            is_primary={false}         
          />

          <Select 
            label_name='С кем патрулирование' 
            field_name='Full_name_junior_patroller' 
            options_list={[
              {id: '1', value: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', name_option: 'Устинов, мастер Мясноборского', selected: false, disabled: false},
              {id: '2', value: 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна', name_option: 'Кузнецова, участковый Ермолинского', selected: false, disabled: false},
              {id: '3', value: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', name_option: 'Маркова, участковый Новгородского', selected: false, disabled: false},
              {id: '4', value: 'мастер леса Советского участкового лесничества Капитонова Марина Александровна', name_option: 'Капитонова, мастер Советского', selected: false, disabled: false},
              {id: '5', value: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', name_option: 'Зайцев, мастер Новгородского', selected: true, disabled: false},
            ]} 
            is_primary={false}           
          />

          <Input label_name='Время выдачи задания' field_name='Time_assignment_issue' placeholder='' input_type='time' is_primary={true} />   
          <Input label_name='Дата выдачи задания' field_name='Date_assignment_issue' placeholder='' input_type='date' is_primary={false} />   

          <Checkbox name="Additional_order" label="Дополнительный приказ" />

          {/* ------------------------------------- Акт --------------------------------- */}

          <div className='uk-margin'>
            <h2 className='uk-heading-divider'>Акт</h2>
          </div>

          <Input label_name='Номер акта о патрулировании' field_name='Number_patrol_act' placeholder='105' input_type='number' is_primary={true} />   
          <Input label_name='Дата акта о патрулировании' field_name='Date_patrol_act' placeholder='' input_type='date' is_primary={false} />   

          <Select 
            label_name='На что наклеено' 
            field_name='Object_leaflet' 
            options_list={[
              {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
              {id: '2', value: 'автобусная остановка', name_option: 'Остановка', selected: false, disabled: false},
              {id: '3', value: 'доска объявлений', name_option: 'Доска объявлений', selected: false, disabled: false},
            ]} 
            is_primary={false}           
          />

          <Select 
            label_name='Деревня, в которой наклеено' 
            field_name='Village_leaflet' 
            options_list={[
              {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
              {id: '2', value: 'Некохово', name_option: 'Некохово', selected: false, disabled: false},
              {id: '3', value: 'Захарьино', name_option: 'Захарьино', selected: false, disabled: false},
              {id: '4', value: 'Подберезье', name_option: 'Подберезье', selected: false, disabled: false},
              {id: '5', value: 'Вешки', name_option: 'Вешки', selected: false, disabled: false},
              {id: '6', value: 'Котовицы', name_option: 'Котовицы', selected: false, disabled: false},
            ]}  
            is_primary={false}           
          />

          <Input label_name='Сколько человек проинформировано' field_name='Number_informed_people' placeholder='2' input_type='number' is_primary={false} />   

          <Select 
            label_name='Деревня, в которой проинформированы люди' 
            field_name='Village_informed_people' 
            options_list={[
              {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
              {id: '2', value: 'Некохово', name_option: 'Некохово', selected: false, disabled: false},
              {id: '3', value: 'Захарьино', name_option: 'Захарьино', selected: false, disabled: false},
              {id: '4', value: 'Подберезье', name_option: 'Подберезье', selected: false, disabled: false},
              {id: '5', value: 'Вешки', name_option: 'Вешки', selected: false, disabled: false},
              {id: '6', value: 'Котовицы', name_option: 'Котовицы', selected: false, disabled: false},
            ]}  
            is_primary={false}           
          />

          <Select 
            label_name='Машина патрулирования' 
            field_name='Patrol_car' 
            options_list={[
              {id: '1', value: 'С948ХК', name_option: 'Алексея Евгеньевича', selected: true, disabled: false},
              {id: '2', value: 'C848ХМ', name_option: 'Николая Викторовича', selected: false, disabled: false},
            ]}  
            is_primary={false}           
          />

          <Checkbox name="Is_there_photo_table" label="Есть ли фототаблица?" />

          {/* --------------------------------------------------------------------------- */}

          <div className="uk-margin">
            <button type="submit" disabled={isSubmitting} className="uk-button uk-button-primary uk-button-large">
                Создать документы
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Document_generator;