// import { useEffect } from 'react';
// import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Result from './Result';
import '../App.css';
import '../css/WebCSS.css';
import logo from '../assets/form-header-logo.png';

export default function Home() {
  return (
    <div className='container'>
      <section className='content'>
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
        <div className='form-container'>
          <div className='form-header'>
            <img src={logo} alt="heart" />
            <p className='form-header-text'>Phân tích từng nhịp tim, hiểu sâu hơn về sức khỏe của bạn</p>
          </div>
          <form className='form-body'>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="heart-rate" className='form-label'>Nhịp tim khi nghỉ<span className='label-unit'>/bmp</span></label>
                <input type="text" id="heart-rate" name="heart-rate" placeholder='Nhịp tim của bạn' />
              </div>
              <div className='form-group'>
                <label htmlFor="age" className='form-label'>Tuổi<span className='label-unit'>/bmp</span></label>
                <input type="text" id="age" name="age" placeholder='Số tuổi' />
              </div>
              <div className='form-group'>
                <label htmlFor="gender" className='form-label'>Giới tính<span className='label-unit'>/bmp</span></label>
                <input type="text" id="gender" name="gender" placeholder='Giới tính' />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="systolicBloodPressure" className='form-label'>Huyết áp tâm thu<span className='label-unit'>/mmHg</span></label>
                <input type="text" id="systolicBloodPressure" name="systolicBloodPressure" placeholder='Áp lực máu khi tim co bóp' />
              </div>
              <div className='form-group'>
                <label htmlFor="diastolicBloodPressure" className='form-label'>Huyết áp tâm trương<span className='label-unit'>/mmHg</span></label>
                <input type="text" id="diastolicBloodPressure" name="diastolicBloodPressure" placeholder='Áp lực máu khi tim giãn nở' />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="weight" className='form-label'>Cân nặng<span className='label-unit'>/kg</span></label>
                <input type="text" id="weight" name="weight" placeholder='Cân nặng của bạn' />
              </div>
              <div className='form-group'>
                <label htmlFor="height" className='form-label'>Chiều cao<span className='label-unit'>/cm</span></label>
                <input type="text" id="height" name="height" placeholder='Chiều cao của bạn' />
              </div>
            </div>
            <button type="submit">
              <p className='btn-text'>Kiểm tra</p>
            </button>
          </form>
        </div>
      </section>
      <div className='overlay'></div>
    </div>
  );
}
