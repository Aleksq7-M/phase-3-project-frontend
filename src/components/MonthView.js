import React from 'react';
import styled from 'styled-components';

const MonthContainer = styled.div`
    width: 100%;
    display: flex
    align-items: center;
    justify-content: center;
`
const Calendar = styled.div`
    width: 85%;
`
const Week = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`
const CalendarHeader = styled(Week)`
    height:25px;
`
const Day = styled.div`
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0%;
    overflow: hidden;
`
const DayLabel = styled.strong`
    border: 0;
    text-align: center;
    height: 25px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
`

function MonthView({date}) {

    return(
        <MonthContainer>
            <Calendar>
                <CalendarHeader id='week0'>
                    <DayLabel>S</DayLabel>
                    <DayLabel>M</DayLabel>
                    <DayLabel>T</DayLabel>
                    <DayLabel>W</DayLabel>
                    <DayLabel>T</DayLabel>
                    <DayLabel>F</DayLabel>
                    <DayLabel>S</DayLabel>
                </CalendarHeader>
                <Week id='week1'>
                    <Day>
                        <span>1</span>
                        <div>event</div>
                    </Day>
                    <Day>2</Day>
                    <Day>3</Day>
                    <Day>4</Day>
                    <Day>5</Day>
                    <Day>6</Day>
                    <Day>7</Day>
                </Week>
                <Week id='week2'>
                    <Day>8</Day>
                    <Day>9</Day>
                    <Day>10</Day>
                    <Day>11</Day>
                    <Day>12</Day>
                    <Day>13</Day>
                    <Day>14</Day>
                </Week>
                <Week id='week3'>
                    <Day>15</Day>
                    <Day>16</Day>
                    <Day>17</Day>
                    <Day>18</Day>
                    <Day>19</Day>
                    <Day>20</Day>
                    <Day>21</Day>
                </Week>
                <Week id='week4'>
                    <Day>22</Day>
                    <Day>23</Day>
                    <Day>24</Day>
                    <Day>25</Day>
                    <Day>26</Day>
                    <Day>27</Day>
                    <Day>28</Day>
                </Week>
                <Week id='week5'>
                    <Day>29</Day>
                    <Day>30</Day>
                    <Day>31</Day>
                    <Day>32</Day>
                    <Day>33</Day>
                    <Day>34</Day>
                    <Day>35</Day>
                </Week>
                <Week id='week6'>
                    <Day>e1</Day>
                    <Day>e2</Day>
                    <Day>e3</Day>
                    <Day>e4</Day>
                    <Day>e5</Day>
                    <Day>e6</Day>
                    <Day>e7</Day>
                </Week>
            </Calendar>
        </MonthContainer>
    )
}

export default MonthView;